var arr = [
    {
        dp:'https://images.unsplash.com/photo-1732209988927-396f5103ede8?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1733660227168-444e3c751a1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D'
    },
    {
        dp:'https://images.unsplash.com/photo-1734484476823-b85473816c39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1731432245362-26f9c0f1ba2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D'
    },
    {
        dp:'https://images.unsplash.com/photo-1675663345944-9440812025c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
        story:'https://images.unsplash.com/photo-1734375181552-cfa83d404033?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D'
    },
    {
        dp:'https://images.unsplash.com/photo-1733737272425-c7455b65e29f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
        story:'https://plus.unsplash.com/premium_photo-1690522330990-250e9a828c08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D'
    },
    {
        dp:'https://images.unsplash.com/photo-1733431281551-9eadf123bd86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
        story:'https://images.unsplash.com/photo-1733869877439-05809aadb5fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D'
    },
    {
        dp:'https://images.unsplash.com/photo-1733235015085-fc29c17c4a16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
        story:'https://images.unsplash.com/photo-1528067753492-69dda1cd56df?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }

]

var sum = ''

arr.forEach(function(elem){
    sum = sum + `<div class="story">
            <img src="${elem.dp}" alt="">
    </div>`
})

var storyiaan = document.querySelector('#storiyaan')

storyiaan.innerHTML = sum