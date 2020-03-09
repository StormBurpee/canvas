<template>
    <div class="shadow">
        <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
            <nav class="navbar justify-content-between flex-nowrap flex-row py-2 px-0">
                <router-link to="/" class="navbar-brand">
                    TWOS - Admin
                </router-link>

                <ul class="navbar-nav mr-auto flex-row float-right">
                    <li class="text-muted font-weight-bold">
                        <slot name="status" />
                    </li>
                </ul>

                <div class="my-auto ml-auto d-flex align-items-end align-middle">
                    <slot name="action" />
                </div>

                <slot name="menu" />

                <div class="dropdown ml-3" v-cloak>
                    <a href="#" id="navbarDropdown" class="nav-link px-0 text-secondary" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img :src="avatar" :alt="user.name" class="rounded-circle my-0 shadow-inner" style="width: 31px"/>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <h6 class="dropdown-header">
                            <strong>{{ user.name }}</strong>
                            <br/>
                            {{ user.email }}
                        </h6>
                        <div class="dropdown-divider"></div>

                        <router-link to="/posts" class="dropdown-item">
                            <span>{{ trans.app.posts_simple }}</span>
                        </router-link>
                        <router-link to="/tags" class="dropdown-item">
                            <span>{{ trans.app.tags }}</span>
                        </router-link>
                        <router-link to="/topics" class="dropdown-item">
                            <span>{{ trans.app.topics }}</span>
                        </router-link>
                        <router-link to="/stats" class="dropdown-item">
                            <span>{{ trans.app.stats }}</span>
                        </router-link>
                        <div class="dropdown-divider"></div>
                        <router-link to="/settings" class="dropdown-item">
                            <span>{{ trans.app.settings }}</span>
                        </router-link>
                        <a href="" class="dropdown-item" @click.prevent="sessionLogout">
                            {{ trans.app.sign_out }}
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'page-header',

        data() {
            return {
                user: Canvas.user,
                avatar: this.$root.avatar,
                token: this.getToken(),
                trans: JSON.parse(Canvas.lang),
            }
        },

        watch: {
            '$root.avatar': function(url){
                this.avatar = url
            }
        },

        methods: {
            sessionLogout() {
                this.logout()
            },
        },
    }
</script>
