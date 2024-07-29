//document.addEventListener('DOMContentLoaded', (event) => {
//  updateGraphicalView();
//});

async function loadContent() {
    console.log('loadContent()')
    const url = document.getElementById('resource-url').value;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const content = await response.text();
    console.log('CONTENT = \n' + content)
    // const textArea = document.getElementById('input-contents');
    // textArea.value = content;
    editor.setValue(content);
}

async function saveContent() {
    console.log('saveContent()')
    const url = document.getElementById('resource-url').value;
    const content = editor.getValue();
    await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'text/plain' },
        body: content
    });
    alert('Content saved successfully');
}