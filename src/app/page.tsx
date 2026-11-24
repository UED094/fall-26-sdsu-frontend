import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export default function Home() {
	return (
		<div>
			<main>
				<Card>
					<CardHeader>
						<CardTitle>Button Variants</CardTitle>
						<CardDescription>
							Different button variants to show ui components
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p>Available button variants:</p>
						<Button
							variant="green"
							size="default"
						>
							Green Button
						</Button>
						<Button
							variant="yellow"
							size="default"
						>
							Yellow Button
						</Button>
						<Button
							variant="default"
							size="default"
						>
							Default Button
						</Button>
					</CardContent>
				</Card>
			</main>
		</div>
	);
}
