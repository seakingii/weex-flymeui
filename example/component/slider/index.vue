<template>
    <div class="mzui-demo">
        <scroller class="scroller">
            <title link="http://design.flyme.cn/book/book.html?bookId=59ef0a54a5a0a6738061aeeb&doc=59f04654a5a0a6738061af08"></title>
            <category title="基本样式"></category>
            <div class="contaniner">
                <text class="title">default:</text>
                <fm-slider @selected="sel"/>
                <text class="title">level: 10</text>
                <fm-slider level="10" @selected="sel"/>
                <text class="title">showProgress</text>
                <fm-slider level="10" showProgress @selected="sel"/>
                <text class="title">levelTexts: ['弱', '偏弱', '中等', '偏强', '强']</text>
                <fm-slider level="10" :levelTexts="levelTexts" @selected="sel"/>
                <text class="title">value: 40 && showProgress</text>
                <fm-slider value="40" @selected="sel" showProgress/>
                <text class="title">value: 3 && level: 5</text>
                <fm-slider level="5" value="3" @selected="sel"/>
            </div>
        </scroller>
    </div>
</template>

<style scoped>
    .mzui-demo {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: #ffffff;
    }
    .title {
        font-size: 42px;
        margin-top: 60px;
        margin-bottom: 30px;
        color: #AAAAAA;
    }
    .contaniner {
        padding: 30px;
    }
</style>

<script>
import { FmSlider } from '../../../index';
import Title from '../../_mods/title.vue';
import Category from '../../_mods/category.vue';
import { setTitle } from '../../_mods/set-nav';

const modal = weex.requireModule('modal');

export default {
    components: { Title, Category, FmSlider },
	data () {
		return {
			levelTexts: ['弱', '偏弱', '中等', '偏强', '强']
		}
	},
	methods: {
		sel (data) {
			modal.toast({message : data})
		}
	}
}
</script>
