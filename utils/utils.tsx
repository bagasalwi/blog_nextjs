export default function formatDate(dateString){
    return (
        new Date(dateString).toLocaleDateString('id-ID',{
            // weekday: 'long',
            year: 'numeric',
            month:'long',
            day:'numeric'
        }));
}