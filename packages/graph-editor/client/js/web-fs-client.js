// client/js/web-fs-client.js
define('webFsClient', ['lib/codemirror'], function (CodeMirror) {
    let editor;
    function init(editorInstance, updateGraph) {
        editor = editorInstance;
        updateGraphCallback = updateGraph;

        // Expose functions globally
        window.loadContent = loadContent;
        window.saveContent = saveContent;
    }
    async function loadContent() {
        const url = document.getElementById('resource-url').value;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const content = await response.text();
        editor.setValue(content);
        if (updateGraphCallback) updateGraphCallback();
    }
    async function saveContent() {
        const url = document.getElementById('resource-url').value;
        const content = editor.getValue();
        await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'text/plain' },
            body: content
        });
        alert('Content saved successfully');
    }
    return {
        init: init,
        loadContent: loadContent,
        saveContent: saveContent
    };
});