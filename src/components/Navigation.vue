<template>
    <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
        <div class="flex-1 flex justify-between items-center">
            <router-link to="/">Your Brand</router-link>
            <label for="menu-toggle" class="cursor-pointer lg:hidden block">
               <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-900" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
            </label>
        </div>
            <input type="checkbox" class="hidden" id="menu-toggle">
            <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                <nav>
                    <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                        <li>
                            <router-link class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/about">About</router-link>
                        </li>
                        <li>
                            <router-link class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/blog">Blog</router-link>
                        </li>
                        <li>
                            <router-link class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/project">Project</router-link>
                        </li>

                    </ul>
                </nav>
            </div>
    </header>
</template>

<style scoped>
    #menu-toggle:checked + #menu {
        display: block;
    }
</style>