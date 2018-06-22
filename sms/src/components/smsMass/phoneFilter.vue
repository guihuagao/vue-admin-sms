<template>
<div class="phoneFilter">
  <div class="mb-10">
    <span class="title-style">指定号码群发</span>
    <span class="assist-style">上新、店庆、节日时，精准给老顾客发送短信，提升销量</span>
  </div>
  <div class="page-block p-20 step-style mt-10">
    <el-steps simple>
      <el-step title="上传号码" >
        <div slot="icon" class="sign">
          <span>1</span>
        </div>
      </el-step>
      <el-step title="发送设置" >
        <div slot="icon" class="sign">
          <span>2</span>
        </div>
      </el-step>
      <el-step title="编辑内容" >
        <div slot="icon" class="sign">
          <span>3</span>
        </div>
      </el-step>
      <el-step title="设置名称" >
        <div slot="icon" class="sign">
          <span>4</span>
        </div>
      </el-step>
      <el-step title="保存设置" >
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
        name: 'phoneFilter',
        data() {
            return {}
        }
    }


</script>

<style scoped lang="scss">

</style>
