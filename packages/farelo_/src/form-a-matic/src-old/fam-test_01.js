import assert from 'assert';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

import rdf from 'rdf-ext';
import Fam from './form-a-matic.js';

const fam = new Fam()

async function serializeToTurtle(graph) {
    const dataset = graph.dataset;
    const textStream = new Readable({ read: () => { } });
    let turtleString = '';

    textStream.on('data', chunk => {
        turtleString += chunk;
    });

    const writer = rdf.formats.parsers.get('text/turtle').import(textStream);
    dataset.forEach(quad => writer.write(quad));
    writer.end();

    await finished(writer);
    textStream.push(null);

    return turtleString;
}

async function createMockGraph(triples) {
    const dataset = await rdf.dataset();
    dataset.addAll(triples.map(t => rdf.quad(...t)));
    const mockGraph = rdf.grapoi({ dataset });
    const turtleString = await serializeToTurtle(mockGraph);
    console.log('Mock graph in Turtle format:', turtleString);
    return mockGraph;
}

const testCreateField = () => {
    const result = fam.createField('Test', ['person', 'test'], 'uri');
    assert(result.includes('<label for="test">Test</label>'), 'Label should be created correctly');
    assert(result.includes('class="person_test uri"'), 'Class should be set correctly');
    assert(result.includes('name="test"'), 'Name should be set correctly');
    console.log('createField test passed');
};

const testProcessProperty = async () => {

    const dataset = await rdf.dataset();
    const quad = rdf.quad(
        rdf.namedNode('subject'),
        rdf.namedNode('http://xmlns.com/foaf/0.1/predicate'),
        rdf.literal('LITERAL')
    );
    dataset.add(quad);

    const mockGraph = rdf.grapoi({ dataset });

    const subject = mockGraph.node(rdf.namedNode('subject'));
    const predicate = subject.out(rdf.namedNode('http://xmlns.com/foaf/0.1/predicate'));

    // console.log('Predicate term:', predicate.term);
    // console.log('Predicate objects:', predicate.terms);

    const result = fam.processProperty(predicate, ['subject']);

    console.log('processProperty result:', result);
    assert(result.includes('class="subject_predicate literal"'), 'Property should be processed correctly');
    console.log('processProperty test passed');
};

const testProcessNestedProperty = async () => {
    const dataset = await rdf.dataset();
    const quads = [
        rdf.quad(
            rdf.namedNode('subject'),
            rdf.namedNode('predicate'),
            rdf.blankNode('b0')
        ),
        rdf.quad(
            rdf.blankNode('b0'),
            rdf.namedNode('nestedPred'),
            rdf.literal('LITERAL')
        )
    ];
    dataset.addAll(quads);

    const mockGraph = rdf.grapoi({ dataset });
    const subject = mockGraph.node(rdf.namedNode('subject'));
    const result = fam.processNestedProperty(subject.out(rdf.namedNode('predicate')), ['subject', 'predicate']);

    assert(result.includes('class="subject_predicate_nestedpred literal"'), 'Nested property should be processed correctly');
    console.log('processNestedProperty test passed');
};

const testProcessSubject = async () => {
    const mockGraph = await createMockGraph([
        [rdf.namedNode('http://example.com/person'), rdf.namedNode('http://xmlns.com/foaf/0.1/name'), rdf.literal('LITERAL')]
    ]);
    const result = fam.processSubject(mockGraph.node(rdf.namedNode('http://example.com/person')));
    assert(result.includes('class="person uri"'), 'Person URI field should be created');
    assert(result.includes('class="person_name literal"'), 'Name field should be created');
    console.log('processSubject test passed');
};

const testGenerateForm = async () => {
    const result = await fam.generateForm('data/foaf-template.ttl');
    assert(result.startsWith('<form>'), 'Form should start with <form> tag');
    assert(result.endsWith('</form>'), 'Form should end with </form> tag');
    assert(result.includes('class="uri uri"'), 'Form should include Person URI field');
    assert(result.includes('class="person_name literal"'), 'Form should include Name field');
    console.log('generateForm test passed');
};

const runTests = async () => {
    try {
        testCreateField();
        await testProcessProperty();
        await testProcessNestedProperty();
        await testProcessSubject();
        await testGenerateForm();
        console.log('All tests passed successfully!');
    } catch (error) {
        console.error('Test failed:', error);
    }
};

runTests();