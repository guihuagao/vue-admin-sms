<template>
  <div>
    <div class="menu-top">
      <div class="logo">
        <img src="../assets/prologo.png"/>
        <span class="right">
       <p class="title">参谋长<span class="yellow-title">基础版</span></p>
       <p class="desc">京东店铺分析工具</p>
     </span>
      </div>
      <div class="title-detail">
        <div class="copy"><span class="icon-copy"></span>&nbsp;&nbsp;基础版</div>
        <span class="sms-num">剩余短信：10</span>
        <span class="recharge">充值</span>
        <span class="username"><span class="icon-account"></span>&nbsp;&nbsp;王小二wangxiaoer</span>
      </div>
    </div>
    <div class="menu">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            default-active="/home"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :router="true">
            <el-menu-item index="/home" @click="menuItem" >
              <i class="icon-home"></i>
              <span slot="title" :class="['menu-title',chooseItem.indexOf('home')!=-1?'chooseTitle':'']">首页概览</span>
            </el-menu-item>
            <el-submenu index="/smsMass" @click="menuItem" :class="[chooseItem.indexOf('smsMass')!=-1?'choose-block':'']">
              <template slot="title">
                <i :class="['icon-message','icon-left',chooseItem.indexOf('smsMass')!=-1?'chooseStyle':'']"></i>
                <span :class="['menu-title',chooseItem.indexOf('smsMass')!=-1?'chooseTitle':'']">短信群发</span>
              </template>
              <el-menu-item index="/smsMass/phoneFilter" class="sencond-title" @click="menuItem">指定号码群发</el-menu-item>
              <el-menu-item index="/smsMass/orderFilter" class="sencond-title" @click="menuItem">订单筛选群发</el-menu-item>
              <el-menu-item index="/smsMass/vipFilter" class="sencond-title" @click="menuItem">会员筛选群发</el-menu-item>
              <el-menu-item index="/smsMass/vipGroupFilter" class="sencond-title" @click="menuItem">会员分组群发</el-menu-item>
            </el-submenu>
            <el-submenu index="/messageCare" @click="menuItem" :class="[chooseItem.indexOf('messageCare')!=-1?'choose-block':'']">
              <template slot="title">
                <i :class="['icon-care','icon-left',chooseItem.indexOf('messageCare')!=-1?'chooseStyle':'']"></i>
                <span :class="['menu-title',chooseItem.indexOf('messageCare')!=-1?'chooseTitle':'']">短信关怀</span>
              </template>
              <el-menu-item index="/messageCare/expeditRemind" class="sencond-title" @click="menuItem">催付提醒</el-menu-item>
              <el-menu-item index="/messageCare/consignRemind" class="sencond-title" @click="menuItem">发货提醒</el-menu-item>
            </el-submenu>

            <el-menu-item index="/sendLog/sendLog" @click="menuItem">
              <i class="icon-log"></i>
              <span slot="title" :class="['menu-title',chooseItem.indexOf('sendLog')!=-1?'chooseTitle':'']">发送日志</span>
            </el-menu-item>

            <el-submenu index="/manageMenu" @click="menuItem" :class="[chooseItem.indexOf('manageMenu')!=-1?'choose-block':'']">
              <template slot="title">
                <i :class="['icon-manage','icon-left',chooseItem.indexOf('manageMenu')!=-1?'chooseStyle':'']"></i>
                <span :class="['menu-title',chooseItem.indexOf('manageMenu')!=-1?'chooseTitle':'']">管理</span>
              </template>
              <el-menu-item index="/manageMenu/vipManage" class="sencond-title" @click="menuItem">会员管理</el-menu-item>
              <el-menu-item index="/manageMenu/blacklistManage" class="sencond-title" @click="menuItem">黑名单管理</el-menu-item>
            </el-submenu>
            <el-submenu index="/recharge" @click="menuItem" :class="[chooseItem.indexOf('recharge')!=-1?'choose-block':'']">
              <template slot="title">
                <i :class="['icon-rankcard','icon-left',chooseItem.indexOf('recharge')!=-1?'chooseStyle':'']"></i>
                <span :class="['menu-title',chooseItem.indexOf('recharge')!=-1?'chooseTitle':'']">短信充值</span>
              </template>
              <el-menu-item index="/recharge/messageRecharge" class="sencond-title" @click="menuItem">短信充值</el-menu-item>
              <el-menu-item index="/recharge/recordRecharge" class="sencond-title" @click="menuItem">充值记录</el-menu-item>
            </el-submenu>

          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="right-page">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'menuBar',
    data () {
      return {
        keys:this.$route.fullPath,
        chooseItem:''
      }
    },
    methods: {
      key(){
        return this.$route.fullPath;
      },
      handleOpen(key, keyPath) {
        console.log(key);
      },
      handleClose(key, keyPath) {
        console.log(key);
      },
      menuItem(val){
        this.chooseItem=val.index;

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .chooseStyle{
    color: $purple-text;
   }
  .menu-top{
    height: 90px;
    font-size: 0px;
    background-color:$bg-left-bar;
  .logo{
    width: 220px;
    font-size: 25px;
    color: $white;
    padding: 10px 30px;
    position:relative;
  img{
    height: 66px;
    width: 66px;
    display: inline-block;
  }
  .right{
    display: inline-block;
    vertical-align: top;
    padding-top:10px;
  .title{
    font-size: 25px;
    font-weight: bold;
  .yellow-title{
    position: absolute;
    top: 25px;
    right: 40px;
    color: $yellow;
    font-size: 12px;
    }
  }
  .desc{
    font-size: 12px;
    margin-top: 10px;
  }
  }
  }


  .title-detail{
    margin-left: 280px;
    margin-top: -90px;
    background-color: $bg-top-bar;
    height: 90px;
    color:$white;
    min-width: 1200px;
    font-size:$px16;
    position:relative;
  .copy,.sms-num,.recharge,.username{
    position:absolute;
    bottom:20px;
  }
  .copy{
    right:480px;
    .icon-copy{
      color:$white;
    }
  }
  .sms-num{
    right: 320px;
  }
  .recharge{
    bottom:18px;
    right: 250px;
    border:1px solid $white;
    border-radius: 8px;
    padding: 1px 10px;
  }
  .username{
    right:50px;
    .icon-account{
      color:$white;
    }
  }
  }
  }


  .menu{
    position: absolute;
    left: 0;
    width: 280px;
    bottom:0;
    background: $white;
    top:90px;
  .menu-title{
    font-size: $px16;
  }
  .el-menu-item{
    padding-left: 40px !important;
  }

  .icon-left{
    padding-left: 20px;
    font-size: 16px;
  }
  .sencond-title{
    padding-left: 60px!important;
    height: 35px;
    line-height: 35px;
    font-size: 14px;
  }

  .el-menu-item.is-active{
    color: $purple-text;

  }
  .el-submenu .is-opened{
    border-left: 4px solid #5c6dee;
    background: $bg-body;
  }

  .chooseTitle{
    color:#5c6dee;
    font-weight: 700;
  }

  .choose-block .is-active{
    border-left: 0;
  }

  .choose-block{
    border-left: 4px solid #5c6dee;
    background: $bg-body;
  }

  }

  .right-page{
    margin-left: 280px;
    min-width: 1200px;
    padding: $px20;
  }
</style>
