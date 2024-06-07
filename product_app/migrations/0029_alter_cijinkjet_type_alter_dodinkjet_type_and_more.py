# Generated by Django 4.2.7 on 2023-12-23 00:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product_app', '0028_alter_cijinkjet_type_alter_dodinkjet_type_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cijinkjet',
            name='type',
            field=models.CharField(choices=[('KGK', 'KGK'), ('videojet', 'videojet')], max_length=50),
        ),
        migrations.AlterField(
            model_name='dodinkjet',
            name='type',
            field=models.CharField(choices=[('p2128', 'p2128'), ('EVO', 'EVO'), ('bicolor', 'bicolor')], max_length=50),
        ),
        migrations.AlterField(
            model_name='lasermarkinginkjet',
            name='type',
            field=models.CharField(choices=[('uv', 'uv'), ('co2', 'co2'), ('fiber', 'fiber')], max_length=50),
        ),
        migrations.AlterField(
            model_name='reciprocatingcompressor',
            name='type',
            field=models.CharField(choices=[('oil_free', 'oil_free'), ('oil_injected', 'oil_injected')], max_length=50),
        ),
        migrations.AlterField(
            model_name='rotaryscrewcompressor',
            name='type',
            field=models.CharField(choices=[('oil_free', 'oil_free'), ('oil_injected', 'oil_injected')], max_length=50),
        ),
    ]
