# Generated by Django 4.2.7 on 2023-11-11 10:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product_app', '0004_alter_cijinkjet_type_alter_dodinkjet_type_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lasermarkinginkjet',
            name='type',
            field=models.TextField(choices=[('uv', 'uv'), ('fiber', 'fiber'), ('co2', 'co2')]),
        ),
    ]
