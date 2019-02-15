const createPolicy = (name , amount) => {
	return{
		type: 'CREATE_POLICY',
		payload:{
			name:name,
			amount:amount
		}
	};
};
const deletePolicy =(name) =>{
		return {
			type:'DELETE_POLICY',
			payload:{
				name:name
			}
		};
};
const createClaim = (name, amountOfMoneyToCollect) => {
	return{
		type: 'CREATE_CLAIM',
		payload:{
			name:name,
			amountOfMoneyToCollect:amountOfMoneyToCollect
		}
	};
};
const claimsHistory = (oldListClaims = [],action) =>{
		if(action.type == 'CREATE_CLAIM'){
			return [...oldListClaims,action.payload];
		}
		return oldListClaims;
};
const accounting = (bagOfMoney = 100,action) => {
		if(action.type == 'CREATE_CLAIM'){
			return bagOfMoney - action.payload.amountOfMoneyToCollect;
		}else if(action.type == 'CREATE_POLICY'){
			return bagOfMoney+action.payload.amountOfMoneyToCollect;
		}
		return bagOfMoney;
};
const policies = (listOfPolicies = [],action) => {
	if(action.type === 'CREATE_POLICY'){
		return [...listOfPolicies,action.payload.name];
	}else if(action.type === 'DELETE_POLICY'){
		return listOfPolicies.filter(name => name!== action.payload.name);
	}
	return listOfPolicies;
};
import createStore,combineReducers from  Redux
// Redux code ....
const ourDepartment = combineReducers({ // cpmined all data
	Money :accounting,
	claimsHistory:claimsHistory,
	policies:policies
});
//create store 
const store = createStore(ourDepartment);	
store.dispatch(createPolicy('Name',30));
store.dispatch(createClaim('name',90));
store.getState();//data inside  store ..