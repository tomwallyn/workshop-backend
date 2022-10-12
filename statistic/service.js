const admin = require("firebase-admin");

const getPresentUser = async () => {
    const db = admin.firestore();
    const present = await db.collection('user').where('present', '==', true).get();
    const absent = await db.collection('user').where('present', '==', false).get();
    const pourcent = present.size/(present.size+absent.size);

    return { 
        'present' : present.size, 
        'absent' : absent.size,
        'pourcent' : pourcent,
        'pourcent_display' : `${pourcent*100}%`
    }
}

module.exports = {getPresentUser}