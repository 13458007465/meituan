/**
 * 功能：视图模型部分
 **/

const Books = new Vue({
    el: '#Books',
    components: {
        'books-search': searchBox,
        'book-list': bookList
    },
    data: {
        webBook: [],
        psychology: [],
        searchVal: ''
    },
    methods: {
        searcher(val) {
            this.searchVal = val;
        }
    },
    created() {
        function getWebBook() {
            return axios.get('./json/books-web.json');
        }  
        function getPsychologyBook() {
            return axios.get('./json/books-psychology.json');
        }
        axios.all([getWebBook(), getPsychologyBook()])
        .then(
            axios.spread((webBook, psycBook) => {
                // 设置Web书籍数据
                this.webBook = webBook.data;
                this.psychology = psycBook.data;
            })
        );
    }
});