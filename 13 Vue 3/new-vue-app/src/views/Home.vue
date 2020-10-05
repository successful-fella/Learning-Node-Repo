<template>
	<Hello name="Kawalpreet"/>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/HelloWorld.vue'

export default {
	name: 'Home',
	components: {
		Hello
	}
}
</script>
