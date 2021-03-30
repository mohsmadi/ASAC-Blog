'use strict'

function article (articleAuthor,articleTitle){
this.name = articleAuthor
this.title =articleTitle
this.total = randomNumber()

}
article.prototype.allArticle.push(this);
article.prototype.allArticle =[];

let form = document.getElementById('myArticle');
form.addEventListener('submit', 'addSubject');

function addSubject(){
    event.preventDefault();

    const authorValue = event.target.articleAuthor.value;
    const titleValue = event.target.articleTitle.value;

    let everyArticl = (articleAutho ,articleTitle);
    localStorage.setItem('object'.JSON.stringify(article.prototype.allArticle));
    everyArticl.render();
}

function randomNumber() {
    return Math.floor(Math.random() * (500 - 1) ) + 1;
  }

  