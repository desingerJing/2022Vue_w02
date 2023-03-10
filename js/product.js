// import Vue
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';


const app = {
    // 建立資料
    data(){
        return {
            // 建立一個放資料的 products
            products: [],
            // 查看細節使用
            temp:{},
            // API 相關
            apiUrl: 'https://vue3-course-api.hexschool.io/v2/',
            apiPath: 'yj-lin'
        }
    },

    // 方法集
    methods: {
        // 取得資料
        getData() {
            axios.get(`${this.apiUrl}api/${this.apiPath}/admin/products`)
            .then((res) => {
                // 把產品資料放進 products
                this.products = res.data.products;
            })
            .catch((err) => {
                console.log(err.response.data.message);
            })
        },

        viewProduct(item) {
            this.temp = item;
        }

    },
    // 生命週期，初始化
    mounted(){
        // 當 cookie 有儲存的時候，就可以取出來
        const demoCookie = document.cookie.replace(/(?:(?:^|.*;\s*)demoToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common['Authorization'] = demoCookie;  // 也可以放在登入成功的時候

        this.getData();
    }
}

createApp(app)
    .mount('#app')