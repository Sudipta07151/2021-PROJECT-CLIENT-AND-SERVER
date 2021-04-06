const labels = [
    {
        icon: 'NoteAddRoundedIcon',
        label: 'CREATE',
    },
    {
        icon: '<LibraryBooksRoundedIcon />',
        label: 'LIBRARY',
    }
]
const returnTab = (labels.map(({ icon, label }) => {
    return `<Tab icon=${icon} label=${label} />`
}));

console.log(returnTab)
