<template>
  <div class="expeditRemind">
    <div class="exped-top">
      <div class="switch-left">
        <p><span class="title-style">催付提醒</span><span class="assist-style">&nbsp;&nbsp;自动短信关怀，全程跟踪订单</span></p>
        <p class="assist-style">温馨提示：只要开启催付提醒，并保持短信余额充足，会自动对下单已付款并发货的买家进行提醒。根据国家及京东有关规定，短信必须审核通过后才可以发送</p>
      </div>
      <span class="switch-right">
          <el-switch
            v-model="value2"
            active-color="#5c6dee"
            inactive-color="#ccc">
        </el-switch>
      </span>
    </div>
    <div class="exped-pro pt-15 pl-20 pr-20 pb-20">
      <div class="pro-main step-style">
        <el-steps simple>
          <el-step title="催付款提醒设置" >
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
          <el-step title="开启催付提醒" >
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
    <div class="exped-center mt-20">
      <div class="center-top">
        <div>
          <i class="el-icon-location-outline"></i>
          <span class="notice-bottom">发货提醒设置</span>
        </div>
        <span class="notice pt-15 pl-20 pr-20 pb-15">&nbsp;&nbsp;&nbsp;短信发送记录</span>
      </div>
      <div class="center-bottom pt-10">
        <div class="bottom-div">
          <div class="bottom-left">发送时段：</div>
          <div class="bottom-right">
            <input class="input-default" value="21342"/>
            &nbsp;&nbsp;&nbsp;<span>至</span>&nbsp;&nbsp;&nbsp;
            <input class="input-default" value="21342"/>
            <span class="assist-style">&nbsp;默认是8:00-22:00，未发送的自动顺延到次日8:00</span>
          </div>
        </div>
        <div class="bottom-div">
          <div class="bottom-left">订单金额：</div>
          <div class="bottom-right">
            <input class="input-default" value="21342"/>
            &nbsp;&nbsp;&nbsp;<span>至</span>&nbsp;&nbsp;&nbsp;
            <input class="input-default" value="21342"/>
          </div>
        </div>
        <div class="bottom-div">
          <div class="bottom-left">指定商品：</div>
          <div class="bottom-right select-default">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="bottom-div">
          <div class="bottom-left">过滤条件：</div>
          <div class="bottom-right checkbox-default">
            <el-checkbox label="一个买家一天只发一次"></el-checkbox>
          </div>
        </div>
        <div class="bottom-div">
          <div class="bottom-left">会员过滤：</div>
          <div class="bottom-right checkbox-default">
            <el-checkbox label="是否过滤黑名单用户"></el-checkbox>
          </div>
        </div>
      </div>
    </div>
    <div class="px10-block">
      <div class="center-top">
        <div>
          <i class="el-icon-location-outline"></i>
          <span class="notice-bottom">编辑内容</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'expeditRemind',
    data() {
      return {
        value2: false,
        active: 0,
        radio: false,
        options: [
          {
            value: '选项1',
            label: '含有'
          },
          {
            value: '选项2',
            label: '不含有'
          },
          {
            value: '选项3',
            label: '新增'
          },
        ],
        value: ""

      }
    },
    mounted() {

    },
    methods: {

      next() {
        if (this.active++ > 6) this.active = 0;
      }
    }
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

  .exped-pro {
    background-color: $white;
    margin-top: $px10;
    border-radius: $px5;
    border: $px1 solid $border-color;
  }

  .exped-center {
    border-radius: $px5;
    border: $px1 solid $border-color;
    background-color: $white;
  }

  .center-bottom {
    font-size: $px14;
    .bottom-div {
      margin-bottom: 10px;
    }
    .bottom-left {
      width: 150px;
      height: 40px;
      text-align: right;
      line-height: 40px;
    }
    .bottom-right {
      margin-left: 150px;
      height: 40px;
      margin-top: -40px;
      line-height: 40px;
      width: auto;

    }
  }

  .center-top {
    font-size: $px16;
    border-bottom: $px1 solid $border-color;
    div {
      display: inline-block;
      margin-left: $px20;
      vertical-align: top;
    }
    span {
      font-weight: 600;
      display: inline-block;
      vertical-align: middle;
    }
    .notice:last-child {
      color: $light-black;
    }
    .notice-bottom {
      height: 46px;
      line-height: 46px;
      color: $purple-text;
      border-bottom: $px2 solid $purple-text;
    }
  }

</style>
