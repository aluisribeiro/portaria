const functions = require('firebase-functions');

exports.updateRow = functions.database.ref(`rows/{rowId}/passwords/{passwordId}`).onWrite( event => {
        const rowKey = event.data.key;
        const password = event.data.val();

        const actual = password.formated;

        return event.data.ref.parent.parent.child('actual').set(actual);
    }) ;
