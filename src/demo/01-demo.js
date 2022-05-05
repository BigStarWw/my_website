const demo = `<template>
<table>
    <tbody>
    <tr>
        <td>
            <div class="heart hidden"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide1"></div>
        </td>
        <td>
            <div class="heart hidden"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide1"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide"></div>
        </td>
        <td>
            <div class="heart hidden"></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="heart animateShowAndHide1"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide1"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide1"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide1"></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="heart animateShowAndHide"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide1"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide1"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide1"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide"></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="heart hidden"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide1"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide1"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide1"></div>
        </td>
        <td>
            <div class="heart hidden"></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="heart hidden "></div>
        </td>
        <td>
            <div class="heart hidden"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide1"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide1"></div>
        </td>
        <td>
            <div class="heart hidden"></div>
        </td>
        <td>
            <div class="heart hidden"></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="heart hidden"></div>
        </td>
        <td>
            <div class="heart hidden"></div>
        </td>
        <td>
            <div class="heart hidden"></div>
        </td>
        <td>
            <div class="heart animateShowAndHide1"></div>
        </td>
        <td>
            <div class="heart hidden"></div>
        </td>
        <td>
            <div class="heart hidden"></div>
        </td>
        <td>
            <div class="heart hidden"></div>
        </td>
    </tr>
    </tbody>
</table>
</template>
<style>
table {
    margin-left: 100px;
    margin-top: 100px;
}
.heart{
    width: 10px;
    height: 10px;
    background: #fa5050;
    position: relative;
    transform: rotate(225deg);
    margin-top: 2px;
}
.heart:after, .heart:before{
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    position: absolute;
    border-radius: 50%;
    background: #fa5050;
}
.heart:after{
    left: 50%;
}
.heart:before{
    top: 50%;
}
.hidden{visibility: hidden}

.animateShowAndHide{
    animation: showAndHide 1.0s infinite;
}
.animateShowAndHide1{
    animation: showAndHide 1.0s infinite .4s;
}

@keyframes showAndHide {
    0%{opacity: 1}
    50%{opacity: .6}
    100%{opacity: .9}
}
</style>
`;
export default demo;
