import '../css/styles.css';
import NewsApiService from './new-service';
import articlesTpl from '../templates/articles.hbs';
import LoadMoreBtn from '../components/load-more-btn';

const newsApiService = new NewsApiService();
const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});

const refs = {
    searchForm: document.querySelector('.js-query-form'),
    articlesContainer: document.querySelector('.js-articles-container'),
    // loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};
refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

function onSearch(e) {
    e.preventDefault();
    newsApiService.query = e.currentTarget.elements.query.value;

    if (newsApiService.query === '') {
        return alert('Write smth normal')
    };

    loadMoreBtn.show();
    newsApiService.resetPage();
    clearArticlesContainer();
    fetchArticles();
};

function fetchArticles(params) {
    loadMoreBtn.disable();
    newsApiService.fetchArticles().then(articles => {
        appendArticlesMarkup(articles);
        loadMoreBtn.enable();
    })
}

function appendArticlesMarkup(articles) {
    refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
}

function clearArticlesContainer() {
    refs.articlesContainer.innerHTML = '';
}