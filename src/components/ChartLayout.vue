<template>
    <div class="chart-layout">
        <h3>Followers</h3>
        <div class="layout">
            <div v-for="y in ys" v-bind:key="y" class="y-block">
                <div class="y-value">
                    {{ y }}
                </div>
            </div>
            <div v-for="x in xs" v-bind:key="x" class="x-block">
                <div class="x-value">
                    {{ x }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChartLayout',
    data: () => ({
        ys: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90].reverse(),
        xs: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        coords: [
            {
                x: 'Feb',
                y: 50
            },
            {
                x: 'Apr',
                y: 70
            }
        ]
    }),
    methods: {
        draw() {}
    }
}
</script>

<style scoped>
.y-block {
    position: relative;
    height: 50px;
    border-bottom: 1px solid lightgrey;
}

.y-value {
    position: absolute;
    bottom: 0;
    color: grey;
}

.x-block {
    display: inline-flex;
    height: 50px;
    width: 100px;
    align-items: center;
    justify-content: center;
}

.x-value {
    color: grey;
}
</style>
