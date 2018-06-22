<template>
<div class="homePage">
      <div>
        <span class="title-style">自动短信关怀</span>
        <span class="assist-style">全程跟踪订单，可以在各个环节设置自动短信关怀</span>
      </div>
  <el-row :gutter="20">
    <el-col :span="18">
      <div class="grid-content">
     <div class="pt-10 pb-10">
       <el-row :gutter="10">
         <el-col :span="12">
           <div class="grid-content list-block">
           <div class="content">
           <img src="../../assets/expedit.png">
            <div class="left pl-10">
              <div class="title-style pb-20">催付提醒</div>
              <div class="assist-style">自动发短信给未付款买家挽回流失订单</div>
            </div>
             <div class="right">
               <el-button type="primary" class="mb-10" @click="switchPay">已开启</el-button>
               <el-button @click="goPage">立即设置</el-button>
             </div>
           </div>

           </div>
         </el-col>
         <el-col :span="12">
           <div class="grid-content list-block">
             <div class="content">
               <img src="../../assets/consign.png">
               <div class="left pl-10">
                 <div class="title-style pb-20">发货提醒</div>
                 <div class="assist-style">后台点发货时发送，提升物流评分</div>
               </div>
               <div class="right">
                 <el-button type="primary" class="mb-10">已开启</el-button><el-button>立即设置</el-button>
               </div>
             </div>
           </div>
         </el-col>
       </el-row>
     </div>

        <div class="pt-10">
          <span class="title-style">短信群发设置</span>
          <span class="assist-style">多种群发方式，精确设置，一键群发，方便快捷</span>
        </div>
        <div class="pt-10 pb-10">
          <el-row :gutter="10" class="mb-10">
            <el-col :span="12">
              <div class="grid-content list-block">
                <div class="content">
                  <img src="../../assets/phone.png">
                  <div class="left pl-10">
                    <div class="title-style pb-10">指定号码群发</div>
                    <div class="assist-style pb-5">1.对收集的号码批量发送短信，一键群发，方便快捷</div>
                    <div class="assist-style">2.指定号码发送，精准营销</div>
                  </div>
                  <div class="right">
                    <el-button @click="addSku">立即设置</el-button>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content list-block">
                <div class="content">
                  <img src="../../assets/order.png">
                  <div class="left pl-10">
                    <div class="title-style pb-10">订单筛选群发</div>
                    <div class="assist-style pb-5">1.根据订单的各种状态给买家发送通知短信</div>
                    <div class="assist-style">2.快速挽回订单，增加服务质量</div>
                  </div>
                  <div class="right">
                    <el-button>立即设置</el-button>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="12">
              <div class="grid-content list-block">
                <div class="content">
                  <img src="../../assets/vip.png">
                  <div class="left pl-10">
                    <div class="title-style pb-10">会员筛选群发</div>
                    <div class="assist-style pb-5">1.多维度条件筛选会员，批量发送短信 , 精准发送</div>
                    <div class="assist-style">2.筛选会员发送，精准，立竿见影</div>
                  </div>
                  <div class="right">
                    <el-button>立即设置</el-button>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content list-block">
                <div class="content">
                  <img src="../../assets/vipgroup.png">
                  <div class="left pl-10">
                    <div class="title-style pb-10">会员分组群发</div>
                    <div class="assist-style pb-5">1.指定条件自动或手工分组筛选会员，批量发送短信</div>
                    <div class="assist-style">2.常用会员分组发送，一劳永逸</div>
                  </div>
                  <div class="right">
                    <el-button>立即设置</el-button>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="mt-10">
          <el-row>
            <el-col :span="24">
              <div class="grid-content list-block">
                <div class="left-bottom-title mb-10">
                  <span class="title-style">短信群发列表</span>
                  <el-button>查看更多</el-button>
                </div>
                  <div class="bottom-table table-default">
                    <el-table
                      :data="tableData"

                      style="width: 100%" max-height=250>
                      <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop="address"
                        label="地址">
                      </el-table-column>
                    </el-table>
                  </div>



              </div>
            </el-col>
          </el-row>
        </div>
    </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content">
        <div class="mt-10">
          <el-row>
            <el-col :span="24">
              <div class="grid-content list-block" style="padding: 0;">
               <div class="title-style account-top">账户信息</div>
                <div class="account-content">
                  <div class="title-style">账户昵称：{{result.cuser_nick}}</div>
                  <div class="title-style">账户名称：王小二</div>
                  <div class="title-style">账户名称：王小二</div>
                  <div class="title-style">账户名称：王小二</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="mt-20">
          <el-row>
            <el-col :span="24">
              <div class="grid-content">
                <img src="../../assets/banner.png" style="width: 100%;border-radius: 5px">
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="mt-20">
          <el-row>
            <el-col :span="24">
              <div class="grid-content list-block" style="padding: 0;">
                <div class="title-style account-top">公告</div>
                <div class="account-content">
                  <div class="title-style">短信营销上线了</div>
                  <div class="title-style">短信营销上线了</div>
                  <div class="title-style">短信营销上线了</div>
                  <div class="title-style">短信营销上线了</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>

      </div>
    </el-col>
  </el-row>

</div>

</template>
<script type="text/ecmascript-6">
    export default {
        name: 'homePage',
        data() {
            return {
              tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
              }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
              }],
               list:[],
              result:{},
              resultAddSku:'',
              alertMessage:'',
              alertType:''
            }
        },
      /*初始化调用*/
        mounted(){
            this.showInit();
        },

     /*方法*/
      methods: {


        goPage(){
          var vm = this;
          vm.$router.push({name:'phoneFilter'});

        },

        openMessage() {
          this.$notify({
            title: '提示',
            message: this.alertMessage,
            type: this.alertType
          });
        },

        showInit() {
         /* this.result={a:1};*/
          var vm = this;
          this.$http.HttpGet({url: "/api/getuserinfo"},{id:'12333443'}).then((res) => {
            debugger;
            vm.result = res.data;

            vm.addSku();

          }).catch((err) => {
            alert(err);
          })
        },

         addSku(){
           var vm = this;
           this.$http.HttpPost({url: "/api/monitor/other/addsku"},{skuid:'25664128184',phone:'4243432'}).then((res) => {
             debugger;
             vm.resultAddSku = res.data;
           }).catch((err) => {
             alert(err);
           })
         },

        switchPay(){
        var vm=this;
          this.$http.HttpGet({url: "/api/message/marketing/press/switch"}, {
            isopen: '0',
            status: "pay"
          }).then((res) => {
            debugger;
            vm.alertMessage=res.reason;
            vm.alertType='success';
            vm.openMessage()

          }).catch((err) => {


          });
        }


      }

    }


</script>

<style scoped lang="scss">

  .list-block{
    background: $white;
    border:1px solid $border-color;
    border-radius: 5px;
    padding: 20px;
    .content{
      display:flex;
      align-items:center;
     position:relative;
      img{
        width: 60px;
        height: 60px;
      }
      .left{
        display: inline-block;
      }

      .right{
        position:absolute;
        right:0;
      .el-button--primary{
        background-color: $purple-text;
        border-color: $purple-text;
        padding: 6px 0;
        width:80px;
        display: block;
      }
      .el-button--default{
        width:80px;
        padding: 6px 0;
        display: block;
        margin-left: 0;

      }

      }


    }

  .left-bottom-title{
  height:30px;
  line-height:30px;
  .el-button--default{
    width:80px;
    padding: 6px 0;
    float: right;
    margin-left: 0;

  }
  }
  .bottom-table{
    .el-table{
      border-top:1px solid $border-color;
      border-left:1px solid $border-color;
      border-right:1px solid $border-color;
     th{
       background: $bg-body;
       height: 40px;
       padding: 0;
       text-align: center;
     }

    }
  }

  .account-top{
    padding: 20px 0 20px 20px;
  }
  .account-content{
    border-top: 1px solid $border-color;
    padding: 10px 20px;
    div{
      line-height: 30px;
    }
  }
  }

  .table-default{
   .el-table thead{
     color: $text;
   }
    .el-table{
      .el-table__header-wrapper{
        thead{
          color: $text;
          font-size: 16px;
          th{
            background: $bg-body;
            height: 40px;
            padding: 0;
            text-align: center;
          }
        }
      }
    }
  }

</style>
