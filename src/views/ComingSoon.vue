<template>
    <div class="movie_body">
        <ul>
            <li>
                <div class="pic_show">
                    <img src="../assets/images/007.png" alt="">
                </div>
                <div class="info_list">
                    <h2>佐罗和麦克斯</h2>
                    <p><span class="person">46465</span>人想看</p>
                    <p>主演:格兰特.鲍尔,艾米.斯马特,博伊德.肯斯特纳</p>
                    <p>未来30天内上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show">
                    <img src="../assets/images/008.png" alt="">
                </div>
                <div class="info_list">
                    <h2>废柴特工</h2>
                    <p><span class="person">46465</span>人想看</p>
                    <p>主演:格兰特.鲍尔,艾米.斯马特,博伊德.肯斯特纳</p>
                    <p>未来30天内上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show">
                    <img src="../assets/images/009.png" alt="">
                </div>
                <div class="info_list">
                    <h2>凤凰城遗忘录</h2>
                    <p><span class="person">46465</span>人想看</p>
                    <p>主演:格兰特.鲍尔,艾米.斯马特,博伊德.肯斯特纳</p>
                    <p>未来30天内上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show">
                    <img src="../assets/images/010.png" alt="">
                </div>
                <div class="info_list">
                    <h2>灰姑娘</h2>
                    <p><span class="person">46465</span>人想看</p>
                    <p>主演:格兰特.鲍尔,艾米.斯马特,博伊德.肯斯特纳</p>
                    <p>未来30天内上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show">
                    <img src="../assets/images/011.png" alt="">
                </div>
                <div class="info_list">
                    <h2>鲨旋风4：四度觉醒</h2>
                    <p><span class="person">46465</span>人想看</p>
                    <p>主演:格兰特.鲍尔,艾米.斯马特,博伊德.肯斯特纳</p>
                    <p>未来30天内上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show">
                    <img src="../assets/images/012.png" alt="">
                </div>
                <div class="info_list">
                    <h2>全境警戒</h2>
                    <p><span class="person">46465</span>人想看</p>
                    <p>主演:格兰特.鲍尔,艾米.斯马特,博伊德.肯斯特纳</p>
                    <p>未来30天内上映</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"ComingSoon"
}
</script>
<style scoped>
    #content .movie_body {
  flex: 1;
  overflow: auto;
}
.movie_body ul {
  margin: 0;
  overflow: hidden;
}
.movie_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 10px;
}
.movie_body .pic_show {
  width: 64px;
  height: 90px;
}
.movie_body .pic_show img {
  width: 100%;
}
.movie_body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.movie_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list .grade{
    font-weight: 700;
    color: #faaf00;
    font-size: 15px;
}
.movie_body .info_list img{
    width: 50px;
    position: absolute;
    right: 10px;
    top: 5px;
}
.movie_body .btn_mall .movie_body .btn_pre{
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    background-color: #f03d37;
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
}
.movie_body .btn_pre{
    background-color: #3c9fe6;
}
</style>