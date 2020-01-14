<template>
      <el-col :span="20">
  <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
  <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
  <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
  <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>

  <el-progress type="circle" :percentage="0"></el-progress>
<el-progress type="circle" :percentage="25"></el-progress>
<el-progress type="circle" :percentage="100" status="success"></el-progress>
<el-progress type="circle" :percentage="70" status="warning"></el-progress>
<el-progress type="circle" :percentage="50" status="exception"></el-progress>
    </el-col>
</template>
<script>
export default {}
</script>