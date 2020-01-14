import React, { useState } from 'react';
import {
	Container,
	Content,
	Card,
	CardHeader,
	CardContent,
	CardFooter,
	Title,
	Balance,
	HiddenContent,
	Annotation,
	ButtonShowBalance
} from './styles';

import Tabs from '~/components/Tabs'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '~/components/Header'
import Menu from '~/components/Menu'
import { Animated } from "react-native";
import { PanGestureHandler, State } from 'react-native-gesture-handler';


export default function Main({ navigation }) {
	// navigation.navigate("Splash")
	const [showBalance, setShowBalance] = useState(false);
	//melhor que state porque atualiza milhares de vezes sem causar perda de desempenho do app ( mais fluido )
	const translateY = new Animated.Value(0);
	const animatedEvent = new Animated.Event(
		[{
			nativeEvent: {
				//pega o valor de movimento y e passa pra variavel translatey
				translationY: translateY
			}
		}],
		{ useNativeDriver: true }
	);

	function onHandlerStateChange(event) {
		let offset = 0;

		if (event.nativeEvent.oldState === State.ACTIVE) {
			let opened = false;
			const { translationY } = event.nativeEvent;

			offset += translationY;

			//volta pra posição se for menos q 100
			if (translationY >= 100) {
				opened = true;
			} else {
				translateY.setValue(offset);
				translateY.setOffset(0);
				offset = 0;
			}

			Animated.timing(translateY, {
				toValue: opened ? 380 : 0,
				duration: 200,
				useNativeDriver: true,
			}).start(() => {
				offset = opened ? 380 : 0;
				translateY.setOffset(offset);
				translateY.setValue(0);
			});
		}
	}

	return (
		<Container>
			<Header />
			<Content>
				<Menu translateY={translateY} />
				<PanGestureHandler
					onGestureEvent={animatedEvent}
					onHandlerStateChange={onHandlerStateChange}
				>
					<Card style={{
						transform: [{
							translateY: translateY.interpolate({
								inputRange: [-200, 0, 380],
								outputRange: [-50, 0, 380],
								extrapolate: 'clamp' //para o translate quando estrapolar os ranges
							}),
						}]
					}}>
						<CardHeader>
							<Icon name="attach-money" size={28} color="#666" />
							<ButtonShowBalance onPress={() => { setShowBalance(!showBalance) }}>
								<Icon name={showBalance ? 'visibility' : 'visibility-off'} size={28} color="#666" />
							</ButtonShowBalance>
						</CardHeader>
						<CardContent>
							<Title>Saldo disponível</Title>
							{showBalance ? <Balance>R$ 197.611,65</Balance> : <HiddenContent></HiddenContent>}
						</CardContent>
						<CardFooter>
							<Annotation>
								Transferência de R$20,00 recebida de Driely da Silva Aoyama hoje às 09:50h
							</Annotation>
						</CardFooter>
					</Card>
				</PanGestureHandler>
			</Content>
			<Tabs translateY={translateY} />
		</Container>
	);
}