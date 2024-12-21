import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function Launcher() {
  const message =
    '⚠️ Уважаемые игроки, сейчас наблюдаются проблемы с поиском серверов в лаунчере DayZ из-за бага разработчиков. У нас есть собственный лаунчер Last Hope! Скачайте его в специальном разделе и наслаждайтесь игрой. Также есть способы решения через скачивание DayZ SA Launcher. Подробнее читайте в дискорде. ⚠️';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/LastHope.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-4 py-8 mb-20">
      <h1 className="mb-12 text-4xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white text-center">
        Скачать лаунчер Last Hope
      </h1>

      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-yellow-500 text-center text-5xl" />
            Важное сообщение
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300 text-2xl">{message}</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button size="lg" onClick={handleDownload}>
            Скачать наш лаунчер
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
