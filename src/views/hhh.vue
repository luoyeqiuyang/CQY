<template>
    <div id="main">
        <Header title="我的神影"></Header>
        <div id="content">
             <Login></Login>
        </div>
        <TabBar></TabBar>
    </div>
</template>
<script>
    import Header from '../views/header'
    import Login from '../views/Login'
    import TabBar from '../views/TabBar'
    export default{
        name:'Mine',
        components:{
            Header,
            Login,
            TabBar
        }
    }
</script>