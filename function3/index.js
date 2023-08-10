function capitalize(user){
    let lowerUser=user.toLowerCase()
    console.log(lowerUser)
    let capitalized=lowerUser.charAt(0).toUpperCase()+ lowerUser.slice(1)
    return (
        capitalized
    )
}
console.log(capitalize("heEUey"))