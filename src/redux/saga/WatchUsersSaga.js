import {setUsers} from '../actions/usersAction';
import {call, put} from 'redux-saga/effects';
import axios from 'axios';

const fetchUsers = async () => {
    try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log('data', data)
      return data;
    } catch (err) {
      console.log(err);
    }
  };

export function* watchUserData() {
    const users = yield call(fetchUsers);
    yield put(setUsers(users));
}

