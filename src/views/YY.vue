<template>
    <div id="main">
        <Header title="神影影院"></Header>
        <div id="content">
            <div class="cinema_menu">
                <div class="city_switch">
                    全城<i class="fa fa-caret-down"></i>
                </div>
                 <div class="city_switch">
                    品牌<i class="fa fa-caret-down"></i>
                </div>
                 <div class="city_switch">
                    特色<i class="fa fa-caret-down"></i>
                </div>
            </div>
            <CiList></CiList>
        </div>
        <TabBar></TabBar>
    </div>
</template>
<script>
import Header from './header';
import TabBar from './TabBar';
import CiList from './CiList';
export default {
    name:'Cinema',
    components:{
        Header,
        TabBar,
        CiList
    }
}
</script>
<style scoped>
        #content .cinema_menu{
            width: 100%;
            height: 45px;
            border-bottom: 1px solid #e6e6e6;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background: white;
        }
</style>