document.addEventListener('DOMContentLoaded', function() {

    var markdownInput = document.getElementById('markdownInput');
    markdownInput.value = '';
    markdownInput.addEventListener('change', function () {
        var file = this.files[0];
        var r = new FileReader();
        r.onload = function (e) {
            var markdown = e.target.result;
            var html = new showdown.Converter().makeHtml(markdown);
            document.getElementById('display').innerHTML = html;
            markdownInput.style.display = 'none';
        };
        r.readAsText(file);
    });
});
