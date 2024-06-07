# Generated by Django 4.2.7 on 2023-11-24 20:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product_app', '0009_remove_cijinkjet_photo_remove_dodinkjet_photo_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cijinkjet',
            name='type',
            field=models.CharField(choices=[('videojet', 'videojet'), ('KGK', 'KGK')], max_length=50),
        ),
        migrations.AlterField(
            model_name='dodinkjet',
            name='type',
            field=models.CharField(choices=[('p2128', 'p2128'), ('bicolor', 'bicolor'), ('EVO', 'EVO')], max_length=50),
        ),
        migrations.AlterField(
            model_name='lasermarkinginkjet',
            name='type',
            field=models.CharField(choices=[('co2', 'co2'), ('fiber', 'fiber'), ('uv', 'uv')], max_length=50),
        ),
        migrations.AlterField(
            model_name='reciprocatingcompressor',
            name='type',
            field=models.CharField(choices=[('oil_injected', 'oil_injected'), ('oil_free', 'oil_free')], max_length=50),
        ),
        migrations.AlterField(
            model_name='rotaryscrewcompressor',
            name='type',
            field=models.CharField(choices=[('oil_injected', 'oil_injected'), ('oil_free', 'oil_free')], max_length=50),
        ),
    ]
