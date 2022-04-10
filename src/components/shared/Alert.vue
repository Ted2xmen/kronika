<template>
 <div class="py-3 my-3" >
          <h3 class="text-dark text-center">
            {{msg}}
            <span class="badge bg-dark">{{ length }}</span>
          </h3>
        </div>
</template>

<script>
export default {
  name: "Alert",
  props: ["length", "msg"],
};
</script>