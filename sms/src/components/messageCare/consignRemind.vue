<template>
  <div class="consignRemind">
    <div class="exped-top">
      <div class="switch-left">
        <p><span class="title-style">发货提醒</span><span class="assist-style">&nbsp;&nbsp;自动短信关怀，全程跟踪订单</span></p>
        <p class="assist-style">温馨提示：只要开启发货提醒，并保持短信余额充足，会自动对下单已付款并发货的买家进行提醒。根据国家及京东有关规定，短信必须审核通过后才可以发送</p>
      </div>
      <span class="switch-right">
          <el-switch
            v-model="value2"
            active-color="#5c6dee"
            inactive-color="#ccc">
        </el-switch>
      </span>
    </div>
    <div class="page-block p-20 step-style mt-10">
      <el-steps simple>
        <el-step title="发货提醒设置" >
          <div slot="icon" class="sign">
            <span>1</span>
          </div>
        </el-step>
        <el-step title="编辑内容" >
          <div slot="icon" class="sign">
            <span>2</span>
          </div>
        </el-step>
        <el-step title="设置名称" >
          <div slot="icon" class="sign">
            <span>3</span>
          </div>
        </el-step>
        <el-step title="保存设置" >
          <div slot="icon" class="sign">
            <span>4</span>
          </div>
        </el-step>
        <el-step title="开启发货提醒" >
          <div slot="icon" class="sign">
            <span>5</span>
          </div>
        </el-step>
        <el-step title="发送记录" >
          <div slot="icon" class="sign">
            <span>6</span>
          </div>
        </el-step>
      </el-steps>

    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'consignRemind',
    data() {
      return {}
    },
    mounted() {

    },
    methods: {}
  }


</script>

<style scoped lang="scss">
  .exped-top {
  p {
    line-height: $px20;
  }
  .switch-left {
    display: inline-block;
  }
  .switch-right {
    float: right;
    display: inline-block;
    margin-top: $px10;
  }
  }



</style>
