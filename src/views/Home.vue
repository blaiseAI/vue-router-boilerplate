<template>
    <div class="mt-3">
        <div class="container mx-auto">
            <div class="px-4">
                <div class="max-w-3xl bg-white rounded-lg mx-auto my-16 p-16">
                    <h1 class="text-2xl font-medium mb-2">Simple Card</h1>
                    <h2 class="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">Vue Router Boilerplate</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa odio libero similique quo, iste delectus maiores quaerat voluptate dolorem laboriosam eveniet voluptatem officia numquam a. Dolorem ab quas iure fuga!
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'home',
  props: ["user"]
};
</script>