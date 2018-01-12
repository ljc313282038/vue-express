<template>
    <div>
        <div class="container">
            <div class="left_main">
                <div class="title">
                    {{mas.titile}}
                </div>
                <div class="tag">
                    <a>
                        {{mas.author}}
                    </a>
                    <a>
                        {{mas.time}}
                    </a>
                    <a>
                        {{mas.read}}
                    </a>
                    <a>
                        {{mas.like}}
                    </a>
                </div>
                <div class="text">
                    {{mas.content}}
                </div>
                <div>
                    <div id="main">
                        <mavon-editor v-model="content" @save='saveContent' :toolbars='toolbars' :subfield='false' style="height:100" />
                    </div>
                    <div class="talk">
                        <ul>
                            <li v-for='(item,index) in content3' :key="item.id">
                                <i class="uselog"></i><a>{{item.content_pl}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="right">ww</div>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapState } from "vuex" // 引入mapState 

export default {
    components: {},
    name: 'pageContent',
    data() {
        return {
            mas: '',
            content: '', //要上传的评论
            content2: '', //没有刷新页面前添加的评论
            content3: '', //评论
            content4: '', //文章
            dataId: '',
            toolbars: {
                bold: false, // 粗体
                italic: false, // 斜体
                header: false, // 标题
                underline: false, // 下划线
                strikethrough: false, // 中划线
                mark: false, // 标记
                superscript: false, // 上角标
                subscript: false, // 下角标
                quote: false, // 引用
                ol: true, // 有序列表
                ul: false, // 无序列表
                link: true, // 链接
                imagelink: false, // 图片链接
                code: false, // code
                table: false, // 表格
                fullscreen: false, // 全屏编辑
                readmodel: false, // 沉浸式阅读
                htmlcode: false, // 展示html源码
                help: false, // 帮助
                /* 1.3.5 */
                undo: true, // 上一步
                redo: false, // 下一步
                trash: true, // 清空
                save: true, // 保存（触发events中的save事件）
                /* 1.4.2 */
                navigation: false, // 导航目录
                /* 2.1.8 */
                alignleft: false, // 左对齐
                aligncenter: false, // 居中
                alignright: false, // 右对齐
                /* 2.2.1 */
                subfield: false, // 单双栏模式
                preview: false, // 预览
            }
        }
    },
    methods: {
        //上传评论
        saveContent() {
            this.$http.post('/api/login/content', { content: this.content, dataId: this.mas.id }).then((data) => {
                var pl = data.body.pl;
                //p1没刷新前先将当下评论的数据渲染到页面
                //push 到conten3中及时渲染页面重置或是刷新则从后台读取
                //
                this.content3.push({ content_pl: pl });
                console.log(this.content3)

            }, (data) => {
                console.log("err");
            })
        },
        //获取文章及其评论列表
        ajax() {
            var id = this.mas.id
            this.$http.get('/api/login/pageContent', { params: { dataId: id } }).then((res) => {
                this.content3 = res.data;
                //console.log(this.content3);

            }, (res) => {
                // body...
            })
        },
        pageContentA() {

            if (this.$store.state.pageContentAData != "") {
                this.mas = this.$store.state.pageContentAData;
            } else {
                this.mas = JSON.parse(localStorage.ms);
                // console.log(this.mas.id);
            }
        }
    },
    mounted() { //事件钩子 加在完成后
        this.dataId = this.$route.params.id
        this.pageContentA();
        this.ajax();
    },
    created() { //事件钩子 组件渲染完成后 
    },
}
</script>
<style scoped>
.talk {
    width: 100%;
    background-color: #ccc;
    text-align: left;
    padding: 20px;
    background-color: #fff;
}

.talk ul {
    width: 100%;
}

.talk ul li {
    padding: 10px 0;
    font-size: 16px;
    vertical-align: middle;
}

.talk ul li a {
    vertical-align: middle;
}

.uselog {
    width: 30px;
    height: 30px;
    display: inline-block;
    background: #ccc;
    border-radius: 100%;
    vertical-align: middle;
    margin-right: 20px
}

.text {
    font-size: 16px;
    color: #454545;
    text-align: left;

    line-height: 150%;
}

.main {
    margin-top: 20px;
}

.container {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    margin-top: 20px;
}

.v-note-wrapper {
    position: relative;
    min-width: 300px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s linear 0s;
    background: #fff;
    z-index: 1500;
    text-align: left;
}

.title {
    padding: 0 29px;
    color: #2c3033;
    font-size: 24px;
    font-weight: 700;
    line-height: 38px;
    text-align: left;
    background-color: #fff;
}

.text {
    margin-bottom: 30px;
    color: #454545;
    padding: 20px 30px;
    background-color: #fff;
}

.tag {
    padding: 0 29px 8px;
    text-align: left;
    color: #888;
    border-bottom: 1px solid #e5e5e5;
    font-size: 14px;
    line-height: 38px;
    background-color: #fff;
}

.left_main {
    float: left;
    width: 885px;
}

.right {
    float: right;
    width: 300px;
    display: block;
    overflow: hidden;
    background: #f3f3f3;
}
</style>