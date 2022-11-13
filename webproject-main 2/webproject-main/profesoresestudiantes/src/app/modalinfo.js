import './firebase'
import {db} from './firebase'

db.collection('guides').get().then(snapshot)