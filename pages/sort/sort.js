// pages/sort/sort.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(option) {
        const posts = [{
           title:"#我遇到了情感难题",
           imgSrc:"/images/bk2.jpg",
           postsContent:"平平无奇高中生：加了暗恋的男生的vx，不知道该怎么展开话题，希望大家教教我拜托。阿伟：和一个男生互相喜欢过，但后来放完假回来我们...", 
           title1:"#近期最值得开心的一件事",
            imgSrc1:"/images/bk1.jpg",
            postsContent1:"MURADxvi：我有狗啦~心捡到修狗啦嘿嘿,是一只白色田园犬!前两天和我爸出去還弯的时候在草丛里捡的,小小一只脏..."      
   },{
    title:"#你经历过最糟糕的一次分手",
    imgSrc:"/images/bk3.jpg",
    postsContent:"运气百分百：别谈  恋爱！分分合合没有意思因为分开后又和好没有之前那样完好了分分合合我都已经十几次了给了他...", 
    title1:"#说一件事劝退恋爱脑",
     imgSrc1:"/images/bk4.jpg",
     postsContent1:"清欢_Rxlb：该怎么样改掉这该死的恋爱脑?!是本人亲身经历的事,我特别喜欢我们班的一个男生,现在看他其实是一般般的,成績一般般,长相一般般..."   
}]
       
       this.setData({
           posts
       })
       console.log(posts)
       },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})