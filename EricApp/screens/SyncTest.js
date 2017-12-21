import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import {net, smartsync, smartstore} from 'react-native-force';

export default class SyncTest extends React.Component {
	componentDidMount(){
		var indexSpecs = [
		    {path:"Name",type:"string"},
		    {path:"Id",type:"string"}
		];

		smartstore.registerSoup(
			"Accounts",
			indexSpecs,
			function(success){console.log('registersoup() success.'); console.log(success);},
			function(error){console.log('registersoup() error.'); console.log(error);}
		);

		net.query('SELECT Id, Name FROM Account LIMIT 10',
        	handleQueryResponse
        );
	}

	render() {
        return (
            <View>
              <Text>Blah</Text>
            </View>
        );
    }
}

function handleQueryResponse(response){
	console.log('response:');
	console.log(response);

	//smartstore.upsertSoupEntries(soupName, response.records, handleUpsertSuccess, handleUpsertError);
}

function handleUpsertSuccess(success){
	console.log('handleUpsertSuccess:');
	console.log(success);
}

function handleUpsertError(error){
	console.log('handleUpsertError:');
	console.log(error);
}