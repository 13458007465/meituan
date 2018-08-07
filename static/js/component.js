/**
 * 功能：组件部分
**/
/* 搜索框 */
const searchBox = {
    props: ['placeholder'],
    template: `
        <div class="searchBox">
            <input 
                type="search" 
                v-model="searchVal" 
                @keydown.enter="showResult"
                :placeholder="placeholder"
            />
        </div>
    `,
    data() {
        return {
            searchVal: ''
        }
    },
    methods: {
        showResult() {
            this.$emit('booksearch', this.searchVal);
        }
    }
}

/* 书籍列表 */
const bookList = {
    props: ['category', 'bookProp', 'searchValue'],
    template: `
        <div class="book-list" v-if="bookShowResult.length !== 0">
            <h2>
                {{category}}
                <span class="icon-arrow-right"></span>
            </h2>                              
            <div>
                <ul>
                    <li v-for="book in bookShowResult"  @click="showBookInfo(book)">
                        <img :src="book.photo">
                        <div class="book-name" :title="book.name">{{book.name | sortString}}</div>
                        <div class="book-price">{{book.price | currency}}</div>
                    </li>
                </ul>
            </div>
        </div>
    `,
    computed: {
        bookShowResult() {
            let showBook;
            if(this.$props.searchValue !== '') {
                showBook = this.$props.bookProp.filter((item) => {
                    return new RegExp(this.$props.searchValue, 'gi').test(item.name);
                });
            } else {
                showBook = this.$props.bookProp;
            }
            return showBook;
        }
    },
    methods: {
        showBookInfo(book) {
            alert(
                "书名：" + book.name + 
                "\n" +
                "价格：￥ " + book.price
            );
        }
    }
}