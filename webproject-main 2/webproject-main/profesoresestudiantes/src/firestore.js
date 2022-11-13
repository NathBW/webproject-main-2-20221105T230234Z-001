import {db} from './app/firebase.js';
import './main'

injectable ({
    async getUid () {
        const users = await this.auth.currentUser;
        if (users === undefined) {
            return null
        } else {
            return users.uid;
            db.collection ('users')
                .add(users)
                
        }

    
    }
})
