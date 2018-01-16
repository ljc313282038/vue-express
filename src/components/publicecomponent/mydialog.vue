<template>
    <div>
        <div class="dialog_warp">
            <div class="dialog_cove" @click="closeDialog" v-if="showDialog"></div>
            <transition name="drop">
                <div class="dialog_conten" v-if="showDialog">
                    <slot>expt</slot>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        showDialog: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {

        }
    },
    methods: {
        closeDialog() {
            this.$emit('on-close') //组件向外面传递方法
        }
    }
}
</script>
<style scoped>
.dialog_cove {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.23);
    position: fixed;
    top: 0;
    left: 0;
     z-index:100000;;
}

.dialog_conten {
    z-index:100001;;
    width: 400px;
    background-color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -150px;
    margin-left: -250px;
    padding: 20px;
    border-radius: 6px;
}

.dialog_conten .colose {
    position: absolute;
    top: 0px;
    right: 0px;
}

.drop-enter-active {
    transition: all .5s ease;
}

.drop-leave-active {
    transition: all .3s ease;
}

.drop-enter {
    transform: translateY(-500px);
}

.drop-leave-active {
    transform: translateY(-500px);
}
</style>