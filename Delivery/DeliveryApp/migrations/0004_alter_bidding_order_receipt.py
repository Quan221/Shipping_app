# Generated by Django 4.0.2 on 2022-05-21 08:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('DeliveryApp', '0003_remove_bidding_customer'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bidding',
            name='order',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='bidding', to='DeliveryApp.order'),
        ),
        migrations.CreateModel(
            name='Receipt',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('price', models.IntegerField(default=0)),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='receipts', to='DeliveryApp.order')),
                ('shipper', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='DeliveryApp.shipper')),
            ],
        ),
    ]