import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<div>
			<main>
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
			</main>
		</div>
	);
}
