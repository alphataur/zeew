<svelte:head>
  <link href="//db.onlinewebfonts.com/c/ec0dbdb6bebc34634ada7628478460eb?family=Trueno" rel="stylesheet" type="text/css"/>
  <link href="http://fonts.cdnfonts.com/css/kayak-sans" rel="stylesheet">
</svelte:head>

<script>
  import "../app.css"
  import InfoBar from "../components/infobar.svelte"
</script>

<div class="w-screen h-screen flex flex-col">
  <InfoBar text="hello world!"/>
  <slot />
</div>
