import rdf from 'rdf-ext';
import { fromFile } from 'rdf-utils-fs';

class Fam {
    createField(name, path, type) {
        console.log(`creating field for ${path}, ${name},  ${type}`)
        return `
      <label for="${name.toLowerCase()}">${name}</label>
      <input type="text" class="${path.join('_').toLowerCase()} ${type}" name="${name.toLowerCase()}" />`;
    }

    processProperty(predicate, path) {
        const objects = predicate.terms;
        const predicateName = predicate.term.value.split('/').pop();

        console.log('predicateName = ' + predicateName)

        if (objects.some(obj => obj.value === '#URI' || obj.termType === 'NamedNode')) {
            return this.createField(predicateName, [...path, predicateName], 'uri');
        }
        if (objects.some(obj => obj.value === 'LITERAL' || obj.termType === 'Literal')) {
            return this.createField(predicateName, [...path, predicateName], 'literal');
        }
        return '';
    }

    processNestedProperty(predicate, path) {
        let html = '';
        for (const blankNode of predicate.out()) {
            // TEST bnod
            for (const nestedPred of blankNode.out()) {
                const nestedPredValue = nestedPred.term.value.split('#').pop();
                if (nestedPredValue !== 'type') {
                    const nestedPath = [...path, nestedPredValue.toLowerCase()];
                    //                    html += this.processProperty(nestedPred, nestedPath);
                }
            }
        }
        return html;
    }

    processSubject(subject) {
        let html = '';
        if (subject && subject.term) {
            const subjectValue = subject.term.value.split('#').pop().toLowerCase();

            console.log('subjectValue = ' + subjectValue)

            if (subject.term.termType != 'BlankNode') {
                html += this.createField('Person URI', [subjectValue], 'uri');
            }
            for (const predicate of subject.out()) {
                const predicateValue = predicate.term.value.split('#').pop();
                if (predicateValue !== 'type') {
                    const path = [subjectValue, predicateValue.toLowerCase()];
                    html += this.processProperty(predicate, path);
                    // html += this.processNestedProperty(predicate, path);
                }
            }
        }
        return html;
    }

    async generateForm(turtleFile) {
        try {
            const stream = fromFile(turtleFile);
            const dataset = await rdf.dataset().import(stream);
            const graph = rdf.grapoi({ dataset });

            let formHtml = '<form>';
            for (const subject of graph.out()) {
                console.log('* processing subject ' + subject.value)
                formHtml += this.processSubject(subject);
            }
            formHtml += '</form>';
            return formHtml;
        } catch (error) {
            console.error('Error generating form:', error);
            return '';
        }
    }
}

// Usage
const fam = new Fam();
fam.generateForm('data/foaf-template.ttl')
    .then(form => console.log(form))
    .catch(error => console.error('Error:', error));

export default Fam;