const blob = new Blob(['Hello, World!'], { type: 'text/plain' });

const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'example.txt';
link.click();



