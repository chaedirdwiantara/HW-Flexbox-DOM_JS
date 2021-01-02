const button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(){
    console.log('tertekan');
    document.getElementById('paragraph').textContent = 'JavaScript diciptakan oleh Brendan Eich pada tahun 1995, seorang programmer dari Netscape yang mulai mengembangkan sebuah bahasa pemograman script yang dinamakan Mocha, diganti dengan nama LiveScript dan berujung menjadi JavaScript.';
}