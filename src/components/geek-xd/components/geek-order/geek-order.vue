<template>
    <view class="geek-card" @click="$emit('click')">
        <view class="geek-header">
            <view class="geek-shop">{{ shop }} > </view>
            <view class="geek-status">{{ status }}</view>
        </view>
        <view class="geek-content">
            <image class="geek-img" :src="img"></image>
            <view class="geek-label">{{ label }}</view>
        </view>
        <view class="geek-footer">
            <view class="geek-more" @click="$emit('more')">更多</view>
            <view class="geek-buttonGroup">
                <view class="geek-btn" @click="$emit('sell')">卖了换钱</view>
                <view class="geek-btn" @click="$emit('return')">退换/售后</view>
                <view class="geek-buy" @click="$emit('again')">再次购买</view>
            </view>
        </view>
    </view>
</template>
<script setup>

const props = defineProps({
    shop: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        default: ''
    },
    img: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
    type: {
        type: String,
        default: 'line'
    }
})
</script>
<style lang="scss" scoped>
.geek-card {
    border: 1rpx solid rgb(183, 183, 183);
    position: relative;
    padding: 0;
    border-radius: 10px;
    height: 320rpx;
    width: 700rpx;
    padding: 20rpx;
    margin: 20rpx;

    .geek-header {
        .geek-shop {
            font-size: 28rpx;
            font-weight: 600;
        }

        .geek-status {
            width: 100rpx;
            text-align: center;
            position: absolute;
            top: 30rpx;
            right: 30rpx;
            font-size: 25rpx;
        }

    }

    .geek-content {
        .geek-label {
            position: absolute;
            top: 100rpx;
            width: 500rpx;
            left: 180rpx;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .geek-img {
            position: absolute;
            border-radius: 10px;
            height: 160rpx;
            width: 160rpx;
            top: 70rpx;
            left: 10rpx;
        }
    }

    .geek-footer {
        width: 660rpx;
        position: absolute;
        bottom: 10rpx;
        font-size: 25rpx;

        .geek-more {
            margin-bottom: 20rpx;
        }

        .geek-buttonGroup {

            position: absolute;
            right: 10rpx;
            bottom: 0;

            .geek-btn {
                border: 1rpx solid black;
                width: 150rpx;
                height: 50rpx;
                border-radius: 100px;
                display: inline-block;
                margin: 10rpx;
                padding: 6rpx;
                text-align: center;

            }

            .geek-buy {
                color: red;
                border: 1rpx solid red;
                width: 150rpx;
                height: 50rpx;
                border-radius: 100px;
                display: inline-block;
                margin: 10rpx;
                padding: 6rpx;
                text-align: center;
            }



        }
    }

}
</style>