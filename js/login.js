// import Vue
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const app = {
    // 資料
    data(){
        return {
            // 定義一個 user 物件，放置帳號密碼
            user:{
                username: '',
                password: ''
            },
            apiUrl: 'https://vue3-course-api.hexschool.io/v2/',
            apiPath: 'yj-lin',
        }
    },

    // 方法集
    methods: {
        login() {
            // axios，串接 API，並帶入 user 帳密資訊
            // https://github.com/axios/axios
            axios.post(`${this.apiUrl}admin/signin`, this.user)
                .then((res) => {
                    alert('登入成功');

                    // Cookie
                    // 取得 token、expired
                    const { token, expired } = res.data;
                    // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
                    // expired 需轉型
                    document.cookie = `demoToken=${token}; expires=${new Date(expired)};`;

                    // 成功登入後，帶入產品頁面
                    window.location.replace("./product.html");  // 不會留下歷史紀錄
                    // window.location.href = "../product.html";
                })
                .catch((err) => {
                    alert(err.response.data.message);
                })
        }
    },

    // 生命週期
    mounted(){

    }
}

createApp(app).mount('#app')




// // 取得 HTML
// const emailInput = document.querySelector('#floatingInput');
// const passwordInput = document.querySelector('#floatingPassword');
// const submitButton = document.querySelector('.submit-btn');
// const checkButton = document.querySelector('.check-btn');

// // API 相關變數
// const apiUrl = 'https://vue3-course-api.hexschool.io/v2/';
// const apiPath = 'yj-lin';


// // 登入
// function login(){
//     // 取得 input 資料
//     const username = emailInput.value;
//     const password = passwordInput.value;

//     // 驗證 - input 是否有填資料
//     if ((username == '') || (password == '')) {
//         return alert('請填妥帳號密碼');
//     }

//     // 將 input 資料放進物件中
//     const user = {
//         username,
//         password
//     }

//     // axios，串接 API，並帶入 user 帳密資訊
//     // https://github.com/axios/axios
//     axios.post(`${apiUrl}admin/signin`, user)
//     .then((res)=>{
//         alert('登入成功');

//         // Cookie
//         // 取得 token、expired
//         const { token, expired } = res.data;
//         // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
//         // expired 需轉型
//         document.cookie = `demoToken=${token}; expires=${new Date(expired)};`;

//         // 成功登入後，帶入產品頁面
//         window.location.replace("../product.html");  // 不會留下歷史紀錄
//         // window.location.href = "../product.html";

//         // 清空 input
//         // emailInput.value = "";
//         // passwordInput.value = "";
//     })
//     .catch((err) => {
//         alert(err.response.data.message);
//     })
// };


// // 當 cookie 有儲存的時候，就可以取出來
// const demoCookie = document.cookie.replace(/(?:(?:^|.*;\s*)demoToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
// axios.defaults.headers.common['Authorization'] = demoCookie;  // 也可以放在登入成功的時候



// // 登入 - 按鈕監聽
// submitButton.addEventListener('click', login);


// ----- 以下是其他功能的筆記區 ----- //

// // 登入驗證
// function checkLogin(){
//     // 取得 Token
//     // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
//     // const demoCookie = document.cookie.replace(/(?:(?:^|.*;\s*)demoToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
//     // defaults --> 每次都加入
//     // axios.defaults.headers.common['Authorization'] = demoCookie;

//     // 確認是否登入
//     axios.post(`${apiUrl}api/user/check`)
//     .then((res)=>{
//         console.log(res.data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }


// // 取得產品列表
// function getProducts(){
//     axios.get(`${apiUrl}api/${apiPath}/admin/products`)
//     .then((res)=>{
//         console.log(res.data.products);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }


// // 新增產品
// const newProduct = {
//     data: {
//         "title": "[賣]動物園造型衣服3",
//         "category": "衣服2",
//         "origin_price": 100,
//         "price": 300,
//         "unit": "個",
//         "description": "Sit down please 名設計師設計",
//         "content": "這是內容",
//         "is_enabled": 1,
//     }
// }

// function addProduct(){
//     axios.post(`${apiUrl}api/${apiPath}/admin/product`, newProduct)  //帶入產品
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }

// // 刪除產品
// function deleteProduct(){
//     axios.delete(`${apiUrl}api/${apiPath}/admin/product/-NL49j2Lnh2wft1pCqDD`)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }
// deleteProduct()




