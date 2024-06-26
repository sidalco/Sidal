# Generated by Django 4.2.7 on 2023-11-07 07:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product_app', '0002_alter_cijinkjet_type_alter_dodinkjet_type_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cijinkjet',
            name='type',
            field=models.TextField(choices=[('KGK', 'KGK'), ('videojet', 'videojet')]),
        ),
        migrations.AlterField(
            model_name='dodinkjet',
            name='type',
            field=models.TextField(choices=[('EVO', 'EVO'), ('p2128', 'p2128'), ('bicolor', 'bicolor')]),
        ),
        migrations.AlterField(
            model_name='lasermarkinginkjet',
            name='type',
            field=models.TextField(choices=[('fiber', 'fiber'), ('uv', 'uv'), ('co2', 'co2')]),
        ),
    ]
